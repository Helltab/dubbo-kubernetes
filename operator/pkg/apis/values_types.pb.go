// Copyright Dubbo Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        v5.28.3
// source: values_types.proto

package apis

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type ArchConfig struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Amd64   uint32 `protobuf:"varint,1,opt,name=amd64,proto3" json:"amd64,omitempty"`
	Ppc64Le uint32 `protobuf:"varint,2,opt,name=ppc64le,proto3" json:"ppc64le,omitempty"`
	S390X   uint32 `protobuf:"varint,3,opt,name=s390x,proto3" json:"s390x,omitempty"`
	Arm64   uint32 `protobuf:"varint,4,opt,name=arm64,proto3" json:"arm64,omitempty"`
}

func (x *ArchConfig) Reset() {
	*x = ArchConfig{}
	if protoimpl.UnsafeEnabled {
		mi := &file_values_types_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ArchConfig) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ArchConfig) ProtoMessage() {}

func (x *ArchConfig) ProtoReflect() protoreflect.Message {
	mi := &file_values_types_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ArchConfig.ProtoReflect.Descriptor instead.
func (*ArchConfig) Descriptor() ([]byte, []int) {
	return file_values_types_proto_rawDescGZIP(), []int{0}
}

func (x *ArchConfig) GetAmd64() uint32 {
	if x != nil {
		return x.Amd64
	}
	return 0
}

func (x *ArchConfig) GetPpc64Le() uint32 {
	if x != nil {
		return x.Ppc64Le
	}
	return 0
}

func (x *ArchConfig) GetS390X() uint32 {
	if x != nil {
		return x.S390X
	}
	return 0
}

func (x *ArchConfig) GetArm64() uint32 {
	if x != nil {
		return x.Arm64
	}
	return 0
}

type GlobalConfig struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Deprecated: Marked as deprecated in values_types.proto.
	Arch           *ArchConfig `protobuf:"bytes,1,opt,name=arch,proto3" json:"arch,omitempty"`
	DubboNamespace string      `protobuf:"bytes,14,opt,name=DubboNamespace,proto3" json:"DubboNamespace,omitempty"`
}

func (x *GlobalConfig) Reset() {
	*x = GlobalConfig{}
	if protoimpl.UnsafeEnabled {
		mi := &file_values_types_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GlobalConfig) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GlobalConfig) ProtoMessage() {}

func (x *GlobalConfig) ProtoReflect() protoreflect.Message {
	mi := &file_values_types_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GlobalConfig.ProtoReflect.Descriptor instead.
func (*GlobalConfig) Descriptor() ([]byte, []int) {
	return file_values_types_proto_rawDescGZIP(), []int{1}
}

// Deprecated: Marked as deprecated in values_types.proto.
func (x *GlobalConfig) GetArch() *ArchConfig {
	if x != nil {
		return x.Arch
	}
	return nil
}

func (x *GlobalConfig) GetDubboNamespace() string {
	if x != nil {
		return x.DubboNamespace
	}
	return ""
}

var File_values_types_proto protoreflect.FileDescriptor

var file_values_types_proto_rawDesc = []byte{
	0x0a, 0x12, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x73, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x17, 0x64, 0x75, 0x62, 0x62, 0x6f, 0x2e, 0x6f, 0x70, 0x65, 0x72,
	0x61, 0x74, 0x6f, 0x72, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x22, 0x68, 0x0a,
	0x0a, 0x41, 0x72, 0x63, 0x68, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x12, 0x14, 0x0a, 0x05, 0x61,
	0x6d, 0x64, 0x36, 0x34, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x05, 0x61, 0x6d, 0x64, 0x36,
	0x34, 0x12, 0x18, 0x0a, 0x07, 0x70, 0x70, 0x63, 0x36, 0x34, 0x6c, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0d, 0x52, 0x07, 0x70, 0x70, 0x63, 0x36, 0x34, 0x6c, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x73,
	0x33, 0x39, 0x30, 0x78, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x05, 0x73, 0x33, 0x39, 0x30,
	0x78, 0x12, 0x14, 0x0a, 0x05, 0x61, 0x72, 0x6d, 0x36, 0x34, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0d,
	0x52, 0x05, 0x61, 0x72, 0x6d, 0x36, 0x34, 0x22, 0x73, 0x0a, 0x0c, 0x47, 0x6c, 0x6f, 0x62, 0x61,
	0x6c, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x12, 0x3b, 0x0a, 0x04, 0x61, 0x72, 0x63, 0x68, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x23, 0x2e, 0x64, 0x75, 0x62, 0x62, 0x6f, 0x2e, 0x6f, 0x70,
	0x65, 0x72, 0x61, 0x74, 0x6f, 0x72, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e,
	0x41, 0x72, 0x63, 0x68, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x42, 0x02, 0x18, 0x01, 0x52, 0x04,
	0x61, 0x72, 0x63, 0x68, 0x12, 0x26, 0x0a, 0x0e, 0x44, 0x75, 0x62, 0x62, 0x6f, 0x4e, 0x61, 0x6d,
	0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x44, 0x75,
	0x62, 0x62, 0x6f, 0x4e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x42, 0x22, 0x5a, 0x20,
	0x64, 0x75, 0x62, 0x62, 0x6f, 0x2e, 0x69, 0x6f, 0x2f, 0x64, 0x75, 0x62, 0x62, 0x6f, 0x2f, 0x6f,
	0x70, 0x65, 0x72, 0x61, 0x74, 0x6f, 0x72, 0x2f, 0x70, 0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69, 0x73,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_values_types_proto_rawDescOnce sync.Once
	file_values_types_proto_rawDescData = file_values_types_proto_rawDesc
)

func file_values_types_proto_rawDescGZIP() []byte {
	file_values_types_proto_rawDescOnce.Do(func() {
		file_values_types_proto_rawDescData = protoimpl.X.CompressGZIP(file_values_types_proto_rawDescData)
	})
	return file_values_types_proto_rawDescData
}

var file_values_types_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_values_types_proto_goTypes = []interface{}{
	(*ArchConfig)(nil),   // 0: dubbo.operator.v1alpha1.ArchConfig
	(*GlobalConfig)(nil), // 1: dubbo.operator.v1alpha1.GlobalConfig
}
var file_values_types_proto_depIdxs = []int32{
	0, // 0: dubbo.operator.v1alpha1.GlobalConfig.arch:type_name -> dubbo.operator.v1alpha1.ArchConfig
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_values_types_proto_init() }
func file_values_types_proto_init() {
	if File_values_types_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_values_types_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ArchConfig); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_values_types_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GlobalConfig); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_values_types_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_values_types_proto_goTypes,
		DependencyIndexes: file_values_types_proto_depIdxs,
		MessageInfos:      file_values_types_proto_msgTypes,
	}.Build()
	File_values_types_proto = out.File
	file_values_types_proto_rawDesc = nil
	file_values_types_proto_goTypes = nil
	file_values_types_proto_depIdxs = nil
}
