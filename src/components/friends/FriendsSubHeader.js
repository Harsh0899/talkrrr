const FriendsSubHeader = (props) => {
  const { title } = props;

  return (
    <div className="friends__sub-header">
      <span>{title}</span>
    </div>
  );
};
export default FriendsSubHeader;