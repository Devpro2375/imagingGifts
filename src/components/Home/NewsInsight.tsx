import React from 'react'

import { BlogType } from '@/type/BlogType'
import BlogItem from '@/components/Blog/BlogItem';

interface Props {
    data: Array<BlogType>;
    start: number;
    limit: number;
}
const NewsInsight: React.FC<Props> = ({ data, start, limit }) => {
    return (
        <>
            <div className="news-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading3 text-center">News insight</div>
                    <div className="list-blog grid md:grid-cols-3 gap-[30px] md:mt-10 mt-6">
                        {data.slice(start, limit).map((prd, index) => (
                            <BlogItem key={index} data={prd} type='style-one' />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsInsight