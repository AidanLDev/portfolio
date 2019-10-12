import React from "react";
import BlogCard from "components/BlogCard/BlogCard";
import * as blogData from "data/Blog/blogData";

import styles from "./Style";

const BlogNav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rightSidebar}>
        <span>Search</span>
        {/* Make a nice UI component */}
        <input type="text" name="search"></input>
      </div>
      <div className={styles.mainContainer}>
        <h1 className={styles.blogHeading}>Blog Posts</h1>
        <BlogCard
          title="Deploying your first website"
          description={blogData.deployingWebAppDesc}
          route="deploying-a-website"
        />
        <BlogCard
          title="# Must use JavaScript array methods"
          description={blogData.placeHolder1}
          route="must-use-array-methods"
        />
        <BlogCard
          title="Reacts useEffect()"
          description={blogData.placeHolder2}
          route="using-use-effect"
        />
        <BlogCard
          title="Will Quantum Computing break encryption"
          description={blogData.placeHolder3}
          route="quantum-computing"
        />
        <BlogCard
          title="JS ES6 using Spread vs Flatten"
          description={blogData.placeHolder3}
          route="spread-vs-flatten"
        />
        <BlogCard
          title="JavaScript prototype"
          description={blogData.placeHolder3}
          route="javascript-prototype"
        />
      </div>
    </div>
  );
};

export default BlogNav;