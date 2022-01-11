import { React } from 'react'
import Response from '../../components/PODResponse/Response'

const FeedPage = () => {

    return(
        <div>
            <h1>Welcome to Apollo</h1>
            <a href="/feed/apod">Picture of the Day</a>
            <a href="/">Something Else</a>
        </div>
    )
}

export default FeedPage;