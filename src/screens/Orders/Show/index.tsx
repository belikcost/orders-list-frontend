import React, { useEffect } from 'react'
import { map } from 'lodash'
import { observer } from 'mobx-react-lite'
import { useParams } from 'react-router-dom'

import OrdersShowStore from './store'
import Item from './components/Item'

import styles from './styles.m.styl'

type ShowParams = {
  id: string;
};

const OrdersShow = observer(
  (): JSX.Element => {
    const { id } = useParams<ShowParams>()
    const [state] = React.useState(new OrdersShowStore())

    useEffect(() => {
      state.loadOrder(id)
    }, [id])

    return (
      <div className={styles.screenWrapper}>
        <div className={styles.screen}>
          {state.loading && <span>Loading...</span>}
          {!state.loading && !state.order && <h4>Not found order</h4>}
          {state.order && (
            <>
              <h1>{state.order.number}</h1>
              <div>
                <div>Товары:</div>
                {map(state.order.items, (item) => (
                  <Item item={item} key={item.id} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    )
  },
)

export default OrdersShow
