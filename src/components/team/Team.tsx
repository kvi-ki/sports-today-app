export type TeamProps = {
  teamName: string;
  teamLogo: string;
};

export default function Team(team: TeamProps) {
  return (
    <div className="col-span-1 flex flex-col items-center">
      <img
        src={team.teamLogo}
        className="w-7 h-8 md:w-9 h-10 lg:w-10 h-full"
        alt="team logo"
      />
      <h2 className="text-navy text-team text-center md:text-teamMd">
        {team.teamName}
      </h2>
    </div>
  );
}
