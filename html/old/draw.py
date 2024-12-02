import mido
from PIL import Image, ImageDraw

filePath = "ToccataandFugueinDminor.mid"
midi_file = mido.MidiFile(filePath)

track = max(midi_file.tracks, key=len)

note_min = 21  
note_max = 108  

# Adjust these for higher resolution
image_width = 10000  # Increased width for better resolution
image_height = (note_max - note_min + 1) * 10  # Scale height to allow zooming
time_scale = 1  # Adjust the time scale for finer granularity

notes = []

current_time = 0  
for msg in track:
    current_time += msg.time
    if msg.type == 'note_on' and msg.velocity > 0:
        notes.append((msg.note, current_time))

img = Image.new('RGB', (image_width, image_height), 'black')
draw = ImageDraw.Draw(img)

for note, start_time in notes:
    if note_min <= note <= note_max:
        x = int(start_time / time_scale)
        y = (note_max - note) * 10  # Scale y-coordinate for better detail
        draw.rectangle([x, y, x + 10, y + 10], fill='white')  # Larger rectangles for visibility

output_path = "midi_visualization_high_res.png"
img.save(output_path)
img.show()
