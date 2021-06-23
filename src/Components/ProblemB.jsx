import React, { Component } from 'react';
import { SearchGIF } from './GiphyAPI';

class ProblemB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            gifs: [],
            loading: false,
            searchHistory: []
        }
    }
    componentDidMount() {
        var searchHistory = localStorage.getItem('searchHistory') ? localStorage.getItem('searchHistory').split(',') : []
        this.setState({
            loading: true,
            searchHistory: searchHistory
        }, this.updateGIFs('red'))
    }
    updateGIFs = (key) => {
        SearchGIF(key).then(res => {
            if (res.data && res.data.data) {
                this.setState({
                    loading: false,
                    gifs: res.data.data
                })
            }
        }).catch(err => console.log(err))
    }
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.key === 'Enter') {
            var searchHistory = this.state.searchHistory
            searchHistory = searchHistory.filter(data => (data !== this.state.search))
            searchHistory.push(this.state.search)
            localStorage.setItem('searchHistory', searchHistory)
            this.setState({
                loading: true,
                gifs: [],
                searchHistory
            }, this.updateGIFs(this.state.search))
        }
    };
    render() {
        return (
            <div>
                <div className='ComponentHeader'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z" /></svg>
                        <p>Hello, Giphy!</p>
                    </div>
                </div>
                <div className='main'>
                    <div className='searchHistory'>
                        <h4>Search History</h4>
                        {this.state.searchHistory.reverse().map(data => (
                            <div className='HistorySearchKey'>{data}</div>))}
                    </div>

                    <div className='searchBox'>
                        <input
                            onChange={this.onChangeHandler}
                            name='search'
                            placeholder='Search Here'
                            value={this.state.search}
                            onKeyPress={this.handleKeypress}
                        />
                        <div className='Gifs'>

                            {this.state.loading ? <div className='loaderBackground'>
                                <div className='loader'></div>
                            </div> : this.state.gifs.length > 0 ? this.state.gifs.map((data, index) => (
                                <div className='GifBox'>
                                    <img src={data.images.original.url} alt='loading..' />
                                    <div>
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0)">
                                                <path d="M21.7122 4.86817C21.2014 4.35718 20.595 3.95182 19.9275 3.67526C19.2601 3.39869 18.5447 3.25635 17.8222 3.25635C17.0997 3.25635 16.3843 3.39869 15.7168 3.67526C15.0494 3.95182 14.4429 4.35718 13.9322 4.86817L12.8722 5.92817L11.8122 4.86817C10.7805 3.83648 9.38122 3.25688 7.92219 3.25688C6.46316 3.25688 5.06388 3.83648 4.03219 4.86817C3.0005 5.89987 2.4209 7.29914 2.4209 8.75817C2.4209 10.2172 3.0005 11.6165 4.03219 12.6482L5.09219 13.7082L12.8722 21.4882L20.6522 13.7082L21.7122 12.6482C22.2232 12.1374 22.6285 11.531 22.9051 10.8635C23.1817 10.1961 23.324 9.48066 23.324 8.75817C23.324 8.03569 23.1817 7.32028 22.9051 6.65282C22.6285 5.98536 22.2232 5.37893 21.7122 4.86817V4.86817Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width="24" height="24" fill="white" transform="translate(0.87207 0.258057)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.8721 11.7581C21.8755 13.078 21.5671 14.38 20.9721 15.5581C20.2665 16.9698 19.1818 18.1573 17.8395 18.9874C16.4972 19.8175 14.9503 20.2575 13.3721 20.2581C12.0522 20.2615 10.7502 19.9532 9.57207 19.3581L3.87207 21.2581L5.77207 15.5581C5.177 14.38 4.86863 13.078 4.87207 11.7581C4.87268 10.1798 5.31268 8.63294 6.14279 7.29064C6.9729 5.94833 8.16032 4.86365 9.57207 4.15809C10.7502 3.56302 12.0522 3.25464 13.3721 3.25809H13.8721C15.9564 3.37308 17.9251 4.25285 19.4012 5.72894C20.8773 7.20504 21.7571 9.17374 21.8721 11.2581V11.7581Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.8721 8.25806C20.5289 8.25806 21.8721 6.91491 21.8721 5.25806C21.8721 3.6012 20.5289 2.25806 18.8721 2.25806C17.2152 2.25806 15.8721 3.6012 15.8721 5.25806C15.8721 6.91491 17.2152 8.25806 18.8721 8.25806Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.87207 15.2581C8.52892 15.2581 9.87207 13.9149 9.87207 12.2581C9.87207 10.6012 8.52892 9.25806 6.87207 9.25806C5.21522 9.25806 3.87207 10.6012 3.87207 12.2581C3.87207 13.9149 5.21522 15.2581 6.87207 15.2581Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M18.8721 22.2581C20.5289 22.2581 21.8721 20.9149 21.8721 19.2581C21.8721 17.6012 20.5289 16.2581 18.8721 16.2581C17.2152 16.2581 15.8721 17.6012 15.8721 19.2581C15.8721 20.9149 17.2152 22.2581 18.8721 22.2581Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9.46216 13.7681L16.2922 17.7481" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16.2822 6.76807L9.46216 10.7481" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                </div>
                            )) : <div className='loaderBackground'>
                                No GIF's
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProblemB;