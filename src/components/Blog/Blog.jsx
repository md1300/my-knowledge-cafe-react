import { CiBookmark } from "react-icons/ci"

const Blog = ({blog,handleToBooksmark,handleMarkAsRead}) => {
    // console.log(blog)
    const {id,cover,author_img,author,hashtags, posted_date,title,reading_time}=blog ;
    return (
        <div>
            <div>
               <img src={cover} alt="" srcset="" />
            </div>
            <div className="flex justify-between">
                <div className="flex ml-4">
                   
                    <div className="w-24 rounded-full">
                              <img src={author_img} alt="" srcset="" />
                    </div>
                    <div>
                        <h3>{author}</h3>
                        <h3>publish date :{posted_date}</h3>
                    </div>    
                </div>

                <div className="flex items-center ml-4">
                    <p><span>{reading_time}</span> min read</p>
                    <button onClick={()=>handleToBooksmark(blog)}><CiBookmark /></button>

                </div>
            </div>
            <div>
                <button onClick={()=>handleMarkAsRead(reading_time ,id)}>mark as read</button>
            </div>
        </div>
    );
};

export default Blog;