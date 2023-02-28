export default function ArticleList(props) {
    return(
        <div className="listWrapper">
            <ul className="listWrapper__list">
                {props.articleList.map((article) => {
                    <li>article.title</li>
                })}
            </ul>
        </div>
    ) 
}