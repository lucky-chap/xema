import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import format from 'date-fns/format';

import * as PATHS from '../constants/paths';
import * as PARAMS from '../constants/params';

import { IEntryProps } from '../lib/interfaces';

import NoteItem from './NoteItem.jsx';
import TaskItem from './TaskItem.jsx';
import BookmarkItem from './BookmarkItem.jsx';

const EntryList = memo(
  ({ items, updateEntryById, deleteEntryById }: IEntryProps) => {
    const location = useLocation();

    return (
      <div className="rounded-md">
        {items.length === 0 && (
          <li className="group relative z-10 rounded-md p-3 py-6">
            {location.pathname === PATHS.HOME && (
              <div className="flex flex-col justify-center text-center">
                <p>No entries yet😭😔</p>
                <p>
                  (Try typing <strong>T</strong> to add a new task)
                </p>
                <p>
                  (Try typing <strong>N</strong> to add a new note)
                </p>
                <p>
                  (Try typing <strong>B</strong> to add a new bookmark)
                </p>
              </div>
            )}
            {location.search === PARAMS.NOTE_PARAMS && (
              <div className="flex flex-col justify-center text-center">
                {'No notes yet. Hit N on your keyboard to add some'}
              </div>
            )}
            {location.search === PARAMS.TASK_PARAMS && (
              <div className="flex flex-col justify-center text-center">
                {'No tasks yet. Hit T on your keyboard to add some'}
              </div>
            )}
            {location.search === PARAMS.BOOKMARK_PARAMS && (
              <div className="flex flex-col justify-center text-center">
                {'No bookmarks yet. Hit B on your keyboard to add some'}
              </div>
            )}
          </li>
        )}

        {Object.values(items).map((item, index) => (
          <li
            key={index}
            className={classNames(
              item.category === 'note'
                ? 'hover:bg-neutral-100 dark:hover:bg-neutral-700/30'
                : 'hover:none dark:hover:none',
              'group relative z-10 rounded-md p-3'
            )}
          >
            <div className="flex flex-col justify-center">
              {item.category === 'note' ? (
                <Link
                  className="absolute inset-0"
                  to={`/${item.category}/${item.id}`}
                />
              ) : null}
              {item.category === 'task' ? (
                <TaskItem
                  key={item.id}
                  task={item}
                  updateEntryById={updateEntryById}
                  onDelete={() => deleteEntryById(item.id)}
                />
              ) : item.category === 'bookmark' ? (
                <BookmarkItem
                  key={item.id}
                  bookmark={item}
                  updateEntryById={updateEntryById}
                  onDelete={() => deleteEntryById(item.id)}
                />
              ) : (
                <NoteItem
                  key={item.id}
                  note={item}
                  onDelete={() => deleteEntryById(item.id)}
                />
              )}
              {item.content && item.category === 'note' ? (
                <span className="... mt-1 truncate font-mono text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                  {item.content}
                </span>
              ) : null}
              <ul className="mt-1 flex flex-wrap text-sm font-normal leading-6 text-neutral-500 dark:text-neutral-400">
                <li
                  className={
                    item.category === 'note'
                      ? 'text-rose-600 dark:text-rose-400'
                      : item.category === 'task'
                      ? 'text-sky-500 dark:text-sky-400'
                      : item.category === 'bookmark'
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-neutral-500'
                  }
                >
                  {item.category}
                </li>
                <li className="mx-2 md:visible">&middot;</li>
                <li className="text-neutral-500">
                  {format(
                    new Date(item.inserted_at),
                    "MMM d, yyyy '–' h:mm bb"
                  )}
                </li>
              </ul>
            </div>
          </li>
        ))}
      </div>
    );
  }
);

export default EntryList;
