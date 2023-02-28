export default function ArticleList(props) {
    console.log(props.articleList);
    return(
        <div className="listWrapper">
            {props.articleList.map((article) => 
                    <div className="item">{article.title}</div>
                )}
        </div>
    ) 
}