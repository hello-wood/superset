/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { ReactNode } from 'react';
import { AdhocFilter } from '@superset-ui/core';
import { ColumnMeta, Metric } from '@superset-ui/chart-controls';
import { DatasourcePanelDndItem } from '../../DatasourcePanel/types';
import { DndItemType } from '../../DndItemType';

export interface OptionProps {
  children: ReactNode;
  index: number;
  clickClose: (index: number) => void;
  onShiftOptions: (dragIndex: number, hoverIndex: number) => void;
  withCaret?: boolean;
}

export interface OptionItemInterface {
  type: string;
  dragIndex: number;
}

export interface LabelProps<T = string[] | string> {
  name: string;
  value?: T;
  onChange: (value?: T) => void;
  options: { string: ColumnMeta };
}

export interface DndColumnSelectProps<
  T = string[] | string,
  O = string[] | string
> extends LabelProps<T> {
  values?: O;
  onDrop: (item: DatasourcePanelDndItem) => void;
  canDrop: (item: DatasourcePanelDndItem) => boolean;
  valuesRenderer: () => ReactNode;
  accept: DndItemType | DndItemType[];
}

export type FilterOptionValueType = Record<string, any> | AdhocFilter;
export interface DndFilterSelectProps {
  name: string;
  value: FilterOptionValueType[];
  columns: ColumnMeta[];
  datasource: Record<string, any>;
  formData: Record<string, any>;
  savedMetrics: Metric[];
  onChange: (filters: FilterOptionValueType[]) => void;
  options: { string: ColumnMeta };
}
