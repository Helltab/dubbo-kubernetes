// Licensed to the Apache Software Foundation (ASF) under one or more
// contributor license agreements.  See the NOTICE file distributed with
// this work for additional information regarding copyright ownership.
// The ASF licenses this file to You under the Apache License, Version 2.0
// (the "License"); you may not use this file except in compliance with
// the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package search

import (
	"context"
	"github.com/apache/dubbo-kubernetes/pkg/bufman/model"
)

type DBSearcherImpl struct {
}

func (searcher *DBSearcherImpl) SearchUsers(ctx context.Context, query string, offset, limit int, reverse bool) ([]*model.User, error) {
	//TODO implement me
	panic("implement me")
}

func (searcher *DBSearcherImpl) SearchRepositories(ctx context.Context, query string, offset, limit int, reverse bool) ([]*model.Repository, error) {
	//TODO implement me
	panic("implement me")
}

func (searcher *DBSearcherImpl) SearchCommitsByContent(ctx context.Context, query string, offset, limit int, reverse bool) ([]*model.Repository, error) {
	//TODO implement me
	panic("implement me")
}

func (searcher *DBSearcherImpl) SearchTag(ctx context.Context, query string, offset, limit int, reverse bool) ([]*model.Tag, error) {
	//TODO implement me
	panic("implement me")
}

func (searcher *DBSearcherImpl) SearchDraft(ctx context.Context, query string, offset, limit int, reverse bool) ([]*model.Commit, error) {
	//TODO implement me
	panic("implement me")
}
