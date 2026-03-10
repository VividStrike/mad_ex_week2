import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  // Static 3x3 Tic Tac Toe board.
  // board[i][j] 
  // i = row index (vertical)
  // j = column index (horizontal)
  const board = [
    ['X','','X'],
    ['O','X','O'],
    ['X','O','X']
  ];

  const rows = [];

  for (let i = 0; i < 3; i++) {
    const cells = [];

    // Nested loop that goes through each column in the current row.
    // i=0 (top row)
    //  j=0     j=1    j=2
    // [ X ]   [   ]  [ X ]

    // i=1 (middle row)
    //  j=0     j=1    j=2
    // [ O ]   [ X ]  [ O ]

    // i=2 (bottom row)
    //  j=0     j=1    j=2
    // [ X ]   [ O ]  [ X ]

    for (let j = 0; j < 3; j++) {
      const value = board[i][j];

      cells.push(
        <View style={styles.cell} key={j}>
          <Text style={value === 'X' ? styles.x : styles.o}>{value}</Text>
        </View>
      );
    }

    rows.push(
      <View style={styles.row} key={i}>
        {cells}
      </View>
    );
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.board}>
          {rows}
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#0f172a', 
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    backgroundColor: 'orange',
    padding: 20,
    borderRadius: 20,
  },

  board: {
    borderWidth: 4,
    borderColor: '#ffffff',
    backgroundColor: '#0ea5e9', 
    padding: 5
  },

  row: {
    flexDirection: 'row',
  },

  cell: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  x: {
    fontSize: 40,
    color: 'red',
  },

  o: {
    fontSize: 40,
    color: 'blue',
  },
});
