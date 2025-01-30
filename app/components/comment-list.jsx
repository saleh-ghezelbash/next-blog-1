import Comment from "./comment";
import list_to_tree from "@/utils/list-to-tree"

export default function commentList({ items }) {
  const nc = list_to_tree(items)  
  
  return (
    <div>
      <div>
        {
          nc.map(item => <Comment comment={item} key={item.id}/>)
        }
      </div>
    </div>
  );
}
