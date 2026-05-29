import re

file_path = 'src/funnel/start.page.ts'
with open(file_path, 'r') as f:
    content = f.read()

# The user wants to change:
# "\n      30 SECONDI\n      Gratuito\n      Dati al sicuro\n      Senza impegno\n    "
# to "\n"

# Let's try to match it as a multiline string with any whitespace between them
# since it's likely inside a multi-line string in JS.

pattern = r'\n\s*30 SECONDI\n\s*Gratuito\n\s*Dati al sicuro\n\s*Senza impegno\n\s*'
new_content = re.sub(pattern, r'\n', content)

if content != new_content:
    with open(file_path, 'w') as f:
        f.write(new_content)
    print("Successfully updated the file.")
else:
    print("Could not find the exact pattern.")
