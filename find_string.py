import os

def search_in_file(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # The user's string:
    target = "\n      30 SECONDI\n      Gratuito\n      Dati al sicuro\n      Senza impegno\n    "
    
    if target in content:
        print(f"Found in {file_path}")
        return True
    return False

files = ['src/funnel/start.page.ts', 'src/funnel/quiz.page.ts', 'src/funnel/optin.page.ts', 'src/funnel/booking.page.ts']
for f in files:
    if os.path.exists(f):
        search_in_file(f)
