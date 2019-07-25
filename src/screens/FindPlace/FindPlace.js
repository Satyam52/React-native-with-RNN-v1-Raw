import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import PlaceList from "../../components//PlaceList/PlaceList";
class FindPlace extends Component {
  itemSeletedHandler = key => {
    const selPlace = this.props.places.find(place => {
      return place.key === key;
    });
    this.props.navigator.push({
      screen: "awesome-places.PlaceDetail",
      title: selPlace.name,
      passProps: {
        selectedPlace: selPlace
      }
    });
  };
  render() {
    return (
      <View>
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSeletedHandler}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};
export default connect(
  mapStateToProps,
  null
)(FindPlace);
