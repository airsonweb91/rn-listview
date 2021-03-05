import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

export default class ListView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,           
        }
    }
   
    componentDidMount() {
        this.setState(prevState => ({
            data: [...prevState.data, ...prevState.data]
        }))
    }

    _renderItem = ({ item }) => {
        return(
            <View style={[styles.itemContainerStyle , this.props.itemContainerStyle]}>
                <Text style={[this.props.textStyle]}>{this.props.fieldName != undefined?item[this.props.fieldName]: item.color}</Text>
            </View>
        )
    }

    render() {
        return (
            <FlatList
                {...this.props}
                ref={(ref) => { this.ListViewRef = ref; }}
                data={this.state.data}
                contentContainerStyle={this.props.contentContainerStyle}
                renderItem={this.props.renderItemFun != undefined?this.props.renderItemFun:this._renderItem}
                keyExtractor={(item) => item.id}
                extraData={this.state.data.length}
                showsVerticalScrollIndicator={this.props.showsVerticalScrollIndicator}
            />
        );
    }
}

ListView.propTypes = {
    showsVerticalScrollIndicator: PropTypes.bool
}

ListView.defaultProps = {
    showsVerticalScrollIndicator: false
};