export type TeamProps = {
  teamName: string;
  teamLogo: string;
};

export default function Team(team: TeamProps) {
  return (
    <div className="col-span-1 flex flex-row items-center lg:gap-6">
      <img
        src={team.teamLogo}
        className="w-7 h-8 lg:w-10 h-full"
        alt="team logo"
      />
      <h2 className="pl-2 text-navy text-team font-medium">
        {team.teamName}
      </h2>
    </div>
  );
}
