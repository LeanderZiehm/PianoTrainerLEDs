import mido
from reportlab.pdfgen import canvas

filePath = "ToccataandFugueinDminor.mid"

midi_file = mido.MidiFile(filePath)

track = max(midi_file.tracks, key=len)

pdf_file = "midi_notes_visualization.pdf"

c = canvas.Canvas(pdf_file, pagesize=(800, 600))
c.setFont("Helvetica", 10)

margin_x, margin_y = 50, 50
note_height = 10
note_spacing = 5
time_scale = 10  

def note_to_y(note):
    return margin_y + (note - 21) * note_height

current_time = 0
for msg in track:
    if msg.type == 'note_on' and msg.velocity > 0:
        
        x = margin_x + int(current_time * time_scale)
        y = note_to_y(msg.note)
        
        c.rect(x, y, note_spacing, note_height, fill=1)
        c.drawString(x, y + note_height, f"{msg.note}")  
        
    if msg.type in ['note_on', 'note_off']:
        current_time += msg.time

c.showPage()
c.save()

print(f"PDF generated: {pdf_file}")
