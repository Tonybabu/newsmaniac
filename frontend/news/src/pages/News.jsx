import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./style.css"
import Card from '../components/Card'
function News({news}) {
    const api_key="d7ea175be88c42579931f43e07f4e761"
    const url="https://newsapi.org/v2/everything?q="
    const [articles, setArticles] =useState([])
    const { searchNews } = useParams();
    useEffect(()=>{
        let query = news;
        if (news === "nothing") {
            query = searchNews;
        }
        async function getNews(){
            try {
                const res=await fetch(`${url}${query}&apiKey=${api_key}`)
                const data=await res.json()
                setArticles(data.articles)
                console.log(data)
            } catch (error) {
                
            }
        }
        getNews()
    },[news,searchNews])
  return (
    <>
        <main>
            <div className="cards-container container flex" id="cards-container">
            {Array.isArray(articles) && articles.length > 0 ? (
                            articles.map((news, index) => (
        <Card
          key={index}
          date={news.publishedAt}
          source={news.source.name}
          title={news.title}
          desc={news.description}
          img={news.urlToImage}
          URL={news.url}
        />
      ))
    ) : (
        <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div>
    )}
        
            </div>
        </main>
    </>
  )
}

export default News