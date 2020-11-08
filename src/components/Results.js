import React from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import ResultItem from './ResultItem';

const unsplash = new Unsplash({ accessKey: "I_iCIFkNzjqyJW3tUnZ2EJz-NCOhw3Gf6fgRu8i8e8Y"});
let initSearch = true;
class Results extends React.Component {
  state= {
    photos: []
  }

  getPhotos() {
    unsplash.search.photos(this.props.input)
    .then(toJson)
    .then(json => {
      this.setState({ photos: json.results });
    })
    console.log('run get photos')
  }

  componentDidMount() {
    initSearch = false;
    this.getPhotos();
    console.log(initSearch)
  }

  shouldComponentUpdate(nextProps) {
    if(this.props.input === nextProps.input) {
      return true
    }
    return false
  }

  render() {
    return(
      <div className="result-list">
        {(this.state.photos !== []) && this.state.photos.map((photo, index) => <ResultItem id={photo} key={index} />)}
      </div>
    )
  }
  
}


export default Results;