import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import AllItems from './AllItems'
import CreateScreen from './CreateScreen'

const btns = [
    {
        id: 1,
        name: 'All Items',
    },
    {
        id: 2,
        name: 'Low Stock',
    },
    {
        id: 3,
        name: 'Create',
    },
]

const data = [
    { id: 1, name: 'Rice', stock: 5, unit: 'kg' },
    { id: 2, name: 'Basmati Rice', stock: 15, unit: 'kg' },
    { id: 3, name: 'Pulse', stock: 25, unit: 'kg' },
    { id: 4, name: 'Corn', stock: 50, unit: 'kg' },
    { id: 5, name: 'Wheat', stock: 19, unit: 'kg' },
]

const HomeScreen = () => {

    const [view, setView] = useState(1)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Dashboard
            </Text>

            <View style={styles.buttonContainer}>
                {btns.map((btn) => (
                    <Pressable
                        key={btn.id}
                        style={[styles.button, view === btn.id && styles.activeBtn]}
                        onPress={() => setView(btn.id)}
                    >
                        <Text
                            style={[styles.btnText, view === btn.id && styles.activeText]}
                        >
                            {btn.name}
                        </Text>
                    </Pressable>
                ))}
            </View>

            {view === 1 && <AllItems data={data} />}
            {view === 2 && <AllItems data={data.filter((item) => item.stock < 20)} />}
            {view === 3 && <CreateScreen />}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        padding: '4%',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },

    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
        marginVertical: 10,
    },

    button: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 50,
        borderWidth: 0.8,
        borderColor: '#72C37AFF',
    },

    btnText: {
        color: '#72C37AFF',
        fontSize: 12,
    },

    activeBtn: {
        backgroundColor: '#72C37AFF',
    },

    activeText: {
        color: '#fff',
    }
})