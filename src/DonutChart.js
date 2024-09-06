import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { Svg, G } from 'react-native-svg';

const DonutChart = ({ data, colors }) => {
  const createPieData = (values, colors) => {
    return values.map((value, index) => ({
      value,
      svg: { fill: colors[index % colors.length] },
    }));
  };

  const radius = 80;
  const ringThickness = 15;
  const rings = [
    { data: data[0], color: colors[0], innerRadius: radius - ringThickness * 1, outerRadius: radius - ringThickness * 0 },
    { data: data[1], color: colors[1], innerRadius: radius - ringThickness * 2, outerRadius: radius - ringThickness * 1 },
    { data: data[2], color: colors[2], innerRadius: radius - ringThickness * 3, outerRadius: radius - ringThickness * 2 },
    { data: data[3], color: colors[3], innerRadius: radius - ringThickness * 4, outerRadius: radius - ringThickness * 3 },
  ];

  return (
    <View style={styles.container}>
      <Svg width={200} height={200} viewBox="0 0 200 200">
        <G x={100} y={100}>
          {rings.map((ring, index) => (
            <PieChart
              key={index}
              style={{ height: 200, width: 200 }}
              data={createPieData([ring.data], [ring.color])}
              innerRadius={ring.innerRadius}
              outerRadius={ring.outerRadius}
              padAngle={0.02}
            />
          ))}
        </G>
      </Svg>
      <View style={styles.legend}>
        {data.map((value, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: colors[index] }]} />
            <Text style={styles.legendText}>{`Value ${index + 1}: ${value}`}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  legend: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  legendColor: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  legendText: {
    fontSize: 14,
  },
});

export default DonutChart;
