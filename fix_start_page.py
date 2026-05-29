import re

file_path = 'src/funnel/start.page.ts'
with open(file_path, 'r') as f:
    content = f.read()

# Pattern for the final__meta div and its contents
# We want to replace the INNER content of the div with a newline, 
# but specifically the part that matches the user's intent.
# Actually, the user's provided string implies they want to remove these labels.

# Target the specific block in the final__meta div
pattern = r'(<div class=\\"final__meta reveal\\" data-d=\\"4\\">).*?(</div>)'
replacement = r'\1\\n    \2'

new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

if content != new_content:
    with open(file_path, 'w') as f:
        f.write(new_content)
    print("Success: Final meta labels removed.")
else:
    print("Error: Could not find the final__meta block.")
