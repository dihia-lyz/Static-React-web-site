
import React from 'react'
import  PageHeader from '../components/PageHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Card extends React.Component {
    render() {
      return (<div className="card">{this.props.children}</div>)
    }
  }
  
  class SelectableCard extends React.Component {
  
    render() {
      var isSelected = this.props.selected ? "selected" : "";
      var className = "selectable " + isSelected;
      return (
        <Card>
          <div className={className} onClick={this.props.onClick}>
            {this.props.children}
            <div className="check"><span className="checkmark">✔</span></div>
          </div>
        </Card>
      );
    }
  }
  
  class SelectableTitleCard extends React.Component {
  
    render() {
      var {
        title,
        description,
        selected
      } = this.props;
      return (
        <SelectableCard onClick={this.props.onClick}
          selected={selected}>
          <div className="content">
          <p className="description mb-4 text-center">{description}</p>
            <h2 className="card-title mb-2 text-center">{title}</h2>
          </div>
        </SelectableCard>
      );
    }
  }
  
  class SelectableCardList extends React.Component {
  
    constructor(props) {
      super(props);
      var selected = props.multiple ? [] : -1;
      var initialState = {
        selected: selected
      };
      this.state = initialState;
    }
  
    onItemSelected(index) {
      this.setState((prevState, props) => {
        if (props.multiple) {
          var selectedIndexes = prevState.selected;
          var selectedIndex = selectedIndexes.indexOf(index);
          if (selectedIndex > -1) {
            selectedIndexes.splice(selectedIndex, 1);
            props.onChange(selectedIndexes);
          } else {
            if (!(selectedIndexes.length >= props.maxSelectable)) {
              selectedIndexes.push(index);
              props.onChange(selectedIndexes);
            }
          }
          return {
            selected: selectedIndexes
          };
        } else {
          props.onChange(index);
          return {
            selected: index
          }
        }
      });
    }
  
    render() {
      var {
        contents,
        multiple
      } = this.props;
  
      var content = contents.map((cardContent, i) => {
        var {
          title,
          description,
          selected
        } = cardContent;
        selected = multiple ? this.state.selected.indexOf(i) > -1 : this.state.selected === i;
        return (
          <SelectableTitleCard key={i} 
            title={title} description={description}
            selected={selected} 
            onClick={(e) => this.onItemSelected(i)} />
        );
      });
      return (<div className="cardlist">{content}</div>);
    }
  }
  
  class Example extends React.Component {
    onListChanged(selected) {
      this.setState({
        selected: selected
      });
    }
    submit() {
      window.alert("Selected: " + this.state.selected);
    }
    render() {
      return (
        <div className="cards-container">
            <h1 className="title mb-5">{this.props.title}</h1>

            <div className='div-row mb-5'>
              <label className='label-container'>
              Sélectionner tout
                <input type="checkbox" /> 
                <span className="select-checkmark"></span>
                {/* <input type="checkbox" name="check"/><span class="label-text">Sélectionner tout</span> */}
              </label>
            </div>
         
          
            <SelectableCardList 
              multiple={this.props.multiple}
            //   maxSelectable={this.props.maxSelectable}
              contents={this.props.cardContents}
              onChange={this.onListChanged.bind(this)}/>
              <div className='div-row footer'>
                <button className="next-btn btn" onClick={(e) => this.submit() }>
                  Suivant  
                  {" " +" "} {" "}{" "}<i className="fa fa-arrow-right l-2 "></i>
               </button>
              </div>
           
        </div>);
    }
  }
  
     
  var genres = [{
    title: "Nom Zone 1",
    description: "Zone 1"
  }, {
    title: "Nom Zone 2",
    description: "Zone 2"
  }, {
    title: "Nom Zone 3",
    description: "Zone 3"
  }, {
    title: "Nom Zone 4",
    description: "Zone 4"
  }, {
    title: "Nom Zone 5",
    description: "Zone 5"
  }, {
    title: "Nom Zone 6",
    description: "Zone 6"
  }];

  
  export default class App extends React.Component {
    render() {
      return (
        <div className='listCards-container'>
            <PageHeader />
            {/* <Example title="Pick a team" cardContents={teams} /> */}
            <Example title="Sélectionnez les zones concernées " cardContents={genres} multiple  />
        </div>
      );
    }
  }
  