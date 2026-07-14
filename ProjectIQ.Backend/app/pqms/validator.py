import json
from pathlib import Path
from jsonschema import Draft202012Validator

SCHEMA_PATH = Path(__file__).parent / "schema.json"

# return a list of errors
def validate(document: dict):
    with open(SCHEMA_PATH, encoding="utf-8") as file:
        schema = json.load(file)

    validator = Draft202012Validator(schema)

    return list(validator.iter_errors(document))


