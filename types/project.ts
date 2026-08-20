export type ProjectStatus =
  | "done"
  | "in-progress"
  | "planned"
  | "tbc"
  | "blocked";

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
  icon: IconName;
};

export type Milestone = {
  milestone: string;
  target: string;
  direction?: string;
  outcome?: string;
};

export type SummaryItem = { label: string; value: string };

export type TeamMember = {
  position: string;
  nickname: string;
  email: string;
  fullName: string;
  group?: "Project Owner" | "PM & SA" | "UX/UI" | "Quality Assurance" | "Development" | "Data";
};

export type Project = {
  slug: string;
  name: string;
  shortName: string;
  accent: "purple" | "blue" | "orange" | "green";
  currentPhase: string;
  status: ProjectStatus;
  nextMilestone: string;
  nextTarget: string;
  description: string;
  timelineTitle: string;
  summaryItems: SummaryItem[];
  checkpoints: RoadmapCheckpoint[];
  milestones: Milestone[];
  executiveSummary: string[];
  candidateScope?: string[];
  teamMembers?: TeamMember[];
};

export type PortfolioPeriod = {
  label: string;
  items: { project: string; label: string }[];
};
