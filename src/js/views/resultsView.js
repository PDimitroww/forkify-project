import view from './view.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; //Parcel 2
import bookmarksView from './bookmarksView.js';

class ResultsView extends view {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query!Please try again :)';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new ResultsView();
