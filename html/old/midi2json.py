import mido
import json

# Load the MIDI file
filePath = "ErikSatieGymnopedieNo.1.mid"
midi_file = mido.MidiFile(filePath)

# List to store track data
data = []
track = max(midi_file.tracks, key=len)
current_time = 0  # Running time in ticks
for msg in track:
    current_time += msg.time  # Update running time
    if msg.type == "note_on" and msg.velocity > 0:  # Note on event with velocity > 0
        message_info = {
            "note": msg.note,
            "time": current_time,  # Absolute time in ticks
            # "velocity": msg.velocity,
        }
        data.append(message_info)

    elif msg.type == "note_off" or (msg.type == "note_on" and msg.velocity == 0):
        for i in range(len(data) - 1, -1, -1):
            if data[i]["note"] == msg.note:
                data[i]["duration"] = current_time - data[i]["time"]
                break

output_path = filePath.replace(".mid", ".json")

with open(output_path, "w") as f:
    json.dump(data, f, indent=2)


# save it also as js file
output_path = filePath.replace(".mid", ".js")
with open(output_path, "w") as f:
    f.write(f"const notes = {json.dumps(data, indent=2)};")

# print(f"Track data saved to {output_path}")
