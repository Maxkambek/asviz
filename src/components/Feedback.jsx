import axios from 'axios'
import React, { useState } from 'react'

const Feedback = () => {
    let bot = {
        TOKEN: "5668705745:AAEMzDYnRfj-R04u9lxJsUaybpq610TwJPM",
        chatID: "-1001606629272"
    }
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')
    const sendForm = (e) => {

        e.preventDefault()

        axios.get(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${'Ismi: ' + name + '%0ATelefon raqami: ' + number + '%0A Xabar:' + message}`)
            .then((res) => {
                setName('')
                setNumber('')
                setMessage('')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <>
            <div className="Feedback">
                <div className="container">
                    <div className="row ">
                        <div className="col-12">
                            <div className="feed_name">
                                Свяжитесь с нами
                            </div>
                        </div>
                    </div>
                    <div className="row  justify-content-between py-4 feed_rev">
                        <form onSubmit={sendForm} className="col-lg-5 col-12 d-flex flex-column">
                            <input value={name} onChange={e => setName(e.target.value)} required className='feed_inp' placeholder='Имя' type="text" />
                            <input value={number} onChange={e => setNumber(e.target.value)} required className='feed_inp' placeholder='Телефон' type="number" />
                            <textarea value={message} onChange={e => setMessage(e.target.value)} required className='feed_opt' placeholder='Сообщение'></textarea>
                            <div className="feed_a">
                                <button type='submit' class="btn"> отправить
                                </button>
                            </div>
                        </form>

                        <div className="col-lg-5 col-12">
                            <div className="feed_p">
                                Напишите нам и мы обязательно ответим на все ваши вопросы и дадим исчерпывающую консультацию.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feedback