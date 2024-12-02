import json

input_path = "ErikSatieGymnopedieNo.1.json"
with open(input_path, "r") as f:
    data = json.load(f)

from typing import List, Dict


def calculate_active_notes(tasks: List[Dict]) -> List[List[int]]:

    # remove all tasks that have no duration
    noDuration = [task for task in tasks if "duration" not in task]
    print(f"Removed {len(noDuration)} tasks that have no duration")
    tasks = [task for task in tasks if "duration" in task]

    time_points = sorted(set(task["time"] for task in tasks) | set(task["time"] + task["duration"] for task in tasks))

    active_notes = []
    for i in range(len(time_points) - 1):
        current_time = time_points[i]
        next_time = time_points[i + 1]

        active = [task["note"] for task in tasks if task["time"] <= current_time < task["time"] + task["duration"]]

        if active:
            active_notes.append(active)

    return active_notes


grouped_notes = calculate_active_notes(data)


output_path = input_path.replace(".json", "_NoteGroups.json")

with open(output_path, "w") as f:
    f.write("[")
    for group in grouped_notes:
        # make it look like list of lists
        f.write("[" + ", ".join(str(note) for note in group) + "],\n")
        # f.write(", ".join(str(note) for note in group) + "\n")
    f.write("]")
