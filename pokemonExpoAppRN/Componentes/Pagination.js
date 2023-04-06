import React from 'react';
import { View, Button } from 'react-native';

export default function Pagination(props) {
    const { onLoadMoreClick } = props;
    return (
        <View>
            <View>
                <Button style={{ color: '#ffffff' }} title="Load More" onPress={onLoadMoreClick} />
            </View>
        </View>
    )
}