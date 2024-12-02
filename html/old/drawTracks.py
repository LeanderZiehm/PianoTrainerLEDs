import mido
from PIL import Image, ImageDraw
import random

# filePath = "ToccataandFugueinDminor.mid"
filePath = "ErikSatieGymnopedieNo.1.mid"
midi_file = mido.MidiFile(filePath)

note_min = 21  
note_max = 108  
# Adjust these for higher resolution
image_width = 10000  # Increased width for better resolution
image_height = (note_max - note_min + 1) * 10  # Scale height to allow zooming
time_scale = 1  # Adjust the time scale for finer granularity


notes_per_track = []

for track_index, track in enumerate(midi_file.tracks):
    notes = []  
    current_time = 0  
    for msg in track:
        current_time += msg.time
        if msg.type == "note_on" and msg.velocity > 0:
            notes.append((msg.note, current_time))
    notes_per_track.append(notes)

track_colors = [tuple(random.randint(0, 255) for _ in range(3)) for _ in range(len(midi_file.tracks))]

img = Image.new("RGB", (image_width, image_height), "black")
draw = ImageDraw.Draw(img)

for track_index, notes in enumerate(notes_per_track):
    color = track_colors[track_index]  
    for note, start_time in notes:
        if note_min <= note <= note_max:
            x = int(start_time / time_scale)
            y = (note_max - note) * 10  # Scale y-coordinate for better detail
            draw.rectangle([x, y, x + 10, y + 10], fill=color)  # Larger rectangles for visibility

output_path = "midi_visualization_tracks_colored.png"
img.save(output_path)
img.show()
