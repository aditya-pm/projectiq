from datetime import date
from typing import Literal

from pydantic import BaseModel, Field


class Meta(BaseModel):
    pqmsVersion: str
    projectName: str
    lastUpdated: date

    client: str | None = None
    status: Literal["draft", "reviewed", "approved"] | None = None
    language: str | None = None


class Overview(BaseModel):
    coreObjective: str

    expectedDeliverables: list[str] = Field(default_factory=list)
    targetUsers: list[str] = Field(default_factory=list)


class Flow(BaseModel):
    id: str
    title: str
    steps: list[str]


class BusinessFlow(BaseModel):
    status: Literal["complete", "partial", "not-provided"]
    flows: list[Flow] = Field(default_factory=list)


class Journey(BaseModel):
    id: str
    title: str
    persona: str
    goal: str
    steps: list[str]


class UserJourney(BaseModel):
    status: Literal["complete", "partial", "not-provided"]
    journeys: list[Journey] = Field(default_factory=list)


class Requirement(BaseModel):
    id: str
    module: str | None = None
    title: str
    description: str
    actor: str | None = None
    priority: Literal["High", "Medium", "Low"] | None = None
    acceptanceCriteria: list[str] = Field(default_factory=list)
    source: str | None = None


class GlossaryItem(BaseModel):
    term: str
    definition: str


# ---------- Root Document ----------
class RequirementsDocument(BaseModel):
    meta: Meta
    overview: Overview
    businessFlow: BusinessFlow
    userJourney: UserJourney
    functionalRequirements: list[Requirement]
    nonFunctionalRequirements: list[Requirement] = Field(default_factory=list)
    constraints: list[str] = Field(default_factory=list)
    assumptions: list[str] = Field(default_factory=list)
    outOfScope: list[str] = Field(default_factory=list)
    glossary: list[GlossaryItem] = Field(default_factory=list)
