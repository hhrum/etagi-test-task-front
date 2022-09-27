import {LoaderFunctionArgs} from 'react-router-dom';

interface TaskPageLoaderParams extends LoaderFunctionArgs {
  id: number
}

export type {
  TaskPageLoaderParams
};