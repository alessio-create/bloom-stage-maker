import re

file_path = 'src/funnel/start.page.ts'
with open(file_path, 'r') as f:
    content = f.read()

# The user wants to change this literal string (including the literal backslash-n sequences)
target = r'\n      30 SECONDI\n      Gratuito\n      Dati al sicuro\n      Senza impegno\n    '
# to just '\n' (as a literal backslash-n sequence)
replacement = r'\n'

if target in content:
    new_content = content.replace(target, replacement)
    with open(file_path, 'w') as f:
        f.write(new_content)
    print("Success: Pattern found and replaced.")
else:
    print("Error: Exact pattern not found.")
    # Let's try to find a similar pattern to see what's wrong
    pattern = r'30 SECONDI.*?Gratuito.*?Dati al sicuro.*?Senza impegno'
    matches = re.findall(pattern, content, re.DOTALL)
    if matches:
        print(f"Found similar matches: {len(matches)}")
        print(f"First match starts with: {matches[0][:50]}")
