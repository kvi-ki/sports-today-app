export type TeamProps = {
  teamName: string;
  teamLogo: string;
};

export default function Team(team: TeamProps) {
  return (
    <div className="col-span-3 flex flex-row items-center">
      <img
        src={team.teamLogo}
        className="w-7 h-8 lg:w-8 h-full"
        alt="team logo"
      />
      <h2 className="pl-2 text-navy text-team font-medium lg:text-teamLg">
        {team.teamName}
      </h2>
    </div>
  );
}
