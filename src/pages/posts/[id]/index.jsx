import { Header } from "src/components/Header";
import { Post } from "src/components/Post";
import classes from "src/styles/Home.module.css";

const PostsId = () => {
	return (
		<div className={classes.container}>
		
			<Header />
	         <Post/>
		</div>
	);
};
export default PostsId;
