import React from 'react'
import MainLayout from '../layout/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';

function PodcastPage() {
  return (
    <MainLayout>
        <span>
          Check out my amazing podcasts  
          <a className='link' href="https://baconsale.com/"> here!</a>
        </span>


    </MainLayout>

  )
}

export default PodcastPage