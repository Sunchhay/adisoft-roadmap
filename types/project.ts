export type ProjectStatus =
  | "completed"
  | "in-progress"
  | "confirmed"
  | "conditional"
  | "planned"
  | "future"
  | "tbc";

export type IconName =
  | "anchor"
  | "check"
  | "code"
  | "flag"
  | "gamepad"
  | "globe"
  | "layers"
  | "lock"
  | "package"
  | "rocket"
  | "shield"
  | "sparkles"
  | "target"
  | "test"
  | "users";

export type RoadmapCheckpoint = {
  id: string;
  phase: string;
  title: string;
  description: string;
  target: string;
  status: ProjectStatus;
  statusLabel?: string;
  icon: IconName;
};

export type Milestone = {
  milestone: string;
  target: string;
  direction?: string;
  outcome?: string;
};

export type SummaryItem = { label: string; value: string };

export type Project = {
  slug: string;
  name: string;
  shortName: string;
  accent: "purple" | "blue" | "orange" | "green";
  currentPhase: string;
  status: ProjectStatus;
  statusLabel: string;
  nextMilestone: string;
  nextTarget: string;
  description: string;
  timelineTitle: string;
  summaryItems: SummaryItem[];
  checkpoints: RoadmapCheckpoint[];
  milestones: Milestone[];
  executiveSummary: string[];
  candidateScope?: string[];
};

export type PortfolioPeriod = {
  label: string;
  items: { project: string; label: string }[];
};
