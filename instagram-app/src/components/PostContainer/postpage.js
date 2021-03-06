import React, { Component } from 'react';
import dummyData from '../../dummy-data'
import PostContainer from '../PostContainer/postcontainer'
import SearchBar from '../SearchBar/searchbarcontainer'

class PostPage extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      filteredPosts: []
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData })
  }

  searchPostsHandler = e => {
    const data = this.state.data.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p
      } else {
        return null
      }
    })
    this.setState({ filteredPosts: data })
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler}
        />
        <PostContainer
          data={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.data
          }
        />
      </div>
    )
  }
}

export default PostPage;

