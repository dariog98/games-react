import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TabProps } from '../../types'
import { Avatar } from '../basis'
import { fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, faBomb } from '@fortawesome/free-solid-svg-icons'
import { useUserContext } from '../providers/UserProvider'

const MembersBar = ({ members }) => {
    return (
        <div className='card bg-body-tertiary'>
            <div className='card-body py-2 px-4'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex gap-2 align-items-center cursor-pointer'>
                        <Avatar user={members[0]} size='small'/>
                        <div>
                            <div>{members[0].username}</div>
                            <small>{members[0].points}</small>
                        </div>
                    </div>

                    <div className='d-flex gap-2 align-items-center cursor-pointer'>
                        <div className='text-end'>
                            <div>{members[1].username}</div>
                            <small>{members[1].points}</small>
                        </div>
                        <Avatar user={members[1]} size='small'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const COLORS = {
    '1': '#81e3e9',
    '2': '#4ca33e',
    '3': '#e7d44f',
    '4': '#4c2061',
    '5': '#f48eaf',
    '6': '#a12d2d',
    '7': '#c75f21',
    '8': '#ffffff',
    'M': '#808080'
}

const ICONS = {
    '1': fa1,
    '2': fa2,
    '3': fa3,
    '4': fa4,
    '5': fa5,
    '6': fa6,
    '7': fa7,
    '8': fa8,
    'M': faBomb
}

const MineButton = ({ column, type, handleOnClick, isPicked }) => {
    const { user } = useUserContext()

    return (
        <div className={`figure3d ${column.active ? 'active' : ''}`} onClick={handleOnClick}>
            <div
                className={`border rounded-3 position-absolute d-flex justify-content-center align-items-center ${type ? 'bg-danger' : 'bg-primary'}`}
                style={{ width: '4rem', height: '4rem' }}
            >
                {isPicked && <Avatar user={user} size='micro'/>}
            </div>
            <div
                className='border rounded-3 bg-body-tertiary d-flex justify-content-center align-items-center figure3d-back'
                style={{ width: '4rem', height: '4rem' }}
            >
                {column.value !== 0 && <FontAwesomeIcon icon={ICONS[column.value]} size='2x' style={{ color: COLORS[column.value]}}/>}
            </div>
        </div>
    )
}

const Game = ({ roomHandler } : TabProps) => {
    const { user } = useUserContext()
    const { room } = roomHandler
    const action = room.actions.find(action => action.user.id === user.id)

    return (
        <div className='d-flex flex-column gap-3'>
            <MembersBar members={room.members}/>

            <div className='card bg-body-tertiary'>
                <div className='card-body'>
                    <div className='d-flex justify-content-center'>
                        <div className='d-flex flex-column gap-3'>
                            {
                                room.grid.map((row, rowIndex) =>
                                    <div key={rowIndex} className='d-flex gap-3'>
                                        {
                                            row.map((column, columnIndex) => {
                                                const isPicked = action && rowIndex == action.tile[0] && columnIndex == action.tile[1]

                                                return (
                                                    <MineButton
                                                        key={`R${rowIndex}C${columnIndex}`}
                                                        column={column}
                                                        type={(rowIndex + columnIndex + row.length * rowIndex) % 2}
                                                        handleOnClick={() => roomHandler.handleSelectTile(rowIndex, columnIndex)}
                                                        isPicked={isPicked}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game