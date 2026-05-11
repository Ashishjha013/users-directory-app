type UserCardProps = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
};

function UserCard({ username, firstName, lastName, email, image }: UserCardProps) {
  return (
    <div className="card">
      <div className="flex items-center gap-4">
        <img src={image} alt={`${firstName} ${lastName}`} className="avatar" />

        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-semibold text-white truncate">{firstName}</h2>
          <h3 className="text-lg font-medium text-slate-300 truncate">{lastName}</h3>
          <div className="mt-3">
            <span className="pill">@{username}</span>
          </div>
        </div>
      </div>

      <div className="divider" />

      <p className="text-sm text-slate-300 truncate" title={email}>
        {email}
      </p>
    </div>
  );
}

export default UserCard;
