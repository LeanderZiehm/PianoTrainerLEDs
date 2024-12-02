import mido


def midi2json(filePath="ErikSatieGymnopedieNo.1.mid", saveToFile=True):

    midi_file = mido.MidiFile(filePath)

    data = []
    track = max(midi_file.tracks, key=len)
    current_time = 0
    for msg in track:
        current_time += msg.time
        if msg.type == "note_on" and msg.velocity > 0:
            message_info = {
                "note": msg.note,
                "time": current_time,
            }
            data.append(message_info)

        elif msg.type == "note_off" or (msg.type == "note_on" and msg.velocity == 0):
            for i in range(len(data) - 1, -1, -1):
                if data[i]["note"] == msg.note:
                    # data[i]["duration"] = current_time - data[i]["time"]
                    data[i]["duration"] = 1
                    break

    def calculate_active_notes(tasks):

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

    if saveToFile:
        output_path = filePath.replace(".mid", "_NoteGroups.json")

        with open(output_path, "w") as f:
            f.write("[")
            for group in grouped_notes:
                # make it look like list of lists
                f.write("[" + ", ".join(str(note) for note in group) + "],\n")
                # f.write(", ".join(str(note) for note in group) + "\n")
            f.write("]")

    return grouped_notes
