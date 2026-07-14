import json
from pathlib import Path
from app.pqms.models import RequirementsDocument
from app.pqms.validator import validate

DATA_PATH = Path(__file__).parents[2] / "data" / "requirements.json"


def load_requirements() -> RequirementsDocument:
    with open(DATA_PATH, encoding="utf-8") as file:
        document = json.load(file)

    errors = validate(document)

    if errors:
        raise ValueError(
            "\n".join(
                f"{'.'.join(map(str, error.path))}: {error.message}" for error in errors
            )
        )

    return RequirementsDocument.model_validate(document)
