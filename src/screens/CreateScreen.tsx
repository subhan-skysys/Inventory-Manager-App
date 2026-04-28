import { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

interface stockItemProps {
  id: number
  name: string
  stock: number
  unit: string
}

interface CreateScreenProps {
  onAddItem: (item: stockItemProps) => void
}

const CreateScreen = ({ onAddItem }: CreateScreenProps) => {
  const [itemName, setItemName] = useState('')
  const [stockAmount, setStockAmount] = useState('')

  const handleAddItem = () => {
    const newItem: stockItemProps = {
      id: Date.now(),
      name: itemName,
      stock: Number(stockAmount),
      unit: 'kg',
    }
    onAddItem(newItem)
    setItemName('')
    setStockAmount('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter an item name ...'
        value={itemName}
        onChangeText={setItemName}
        style={styles.input}
      />

      <TextInput
        placeholder='Enter stock amount ..'
        value={stockAmount}
        onChangeText={setStockAmount}
        style={styles.input}
        keyboardType='numeric'
      />

      <Pressable style={styles.addButton} onPress={handleAddItem}>
        <Text style={styles.btnText}>ADD ITEM IN STOCK</Text>
      </Pressable>
    </View>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
  container: {
    paddingVertical: "4%",
    gap: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#D7F6BFFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },

  addButton: {
    backgroundColor: '#CABFEEFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },

  btnText: {
    color: 'white',
    fontWeight: 500,
    fontSize: 15,
  },
})