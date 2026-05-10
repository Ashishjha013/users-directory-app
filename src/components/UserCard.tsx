type UserCardProps = {
  firstName: string;
  lastName: string;
  email: string;
};

function UserCard({ firstName, lastName, email }: UserCardProps) {
  return (
    <div className="card">
      <div className="avatar">
        {firstName[0]}
        {lastName[0]}
      </div>

      <div className="user-info">
        <h2>
          {firstName} {lastName}
        </h2>

        <p>{email}</p>
      </div>
    </div>
  );
}

export default UserCard;
