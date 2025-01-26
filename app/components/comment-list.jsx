import Comment from "./comment";

export default function commentList({ items }) {
  return (
    <div className="max-w-lg">
      <div>
        <Comment>
          <Comment>
            <Comment />
          </Comment>
          <Comment />
          <Comment />
          <Comment />
        </Comment>
      </div>
    </div>
  );
}
