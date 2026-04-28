import { StyleSheet, Text, TextInput, View } from 'react-native'

const CreateScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter an item name ...'
      />
    </View>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
  container: {
    padding: "4%",
  }
})