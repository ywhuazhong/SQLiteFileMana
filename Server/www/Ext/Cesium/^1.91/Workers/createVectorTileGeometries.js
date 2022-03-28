define(["./Transforms-f15de320","./BoxGeometry-e49f89a6","./Matrix2-c6c16658","./Color-b12fd141","./CylinderGeometry-14096659","./when-4bbc8319","./EllipsoidGeometry-1756cc4a","./IndexDatatype-ddbc25a7","./createTaskProcessorWorker","./RuntimeError-5b082e8f","./ComponentDatatype-3d0a0aac","./WebGLConstants-508b9636","./combine-e9466e32","./GeometryOffsetAttribute-821af768","./GeometryAttribute-8350368e","./GeometryAttributes-7827a6c2","./VertexFormat-7b982b01","./CylinderGeometryLibrary-95202773"],(function(e, t, n, r, i, a, o, s, c, d, l, f, u, h, b, p, y, x){"use strict";function g(e){this.offset=e.offset,this.count=e.count,this.color=e.color,this.batchIds=e.batchIds}const m=new n.Cartesian3,C=n.Matrix4.packedLength+n.Cartesian3.packedLength,I=n.Matrix4.packedLength+2,k=n.Matrix4.packedLength+n.Cartesian3.packedLength,M=n.Cartesian3.packedLength+1,B={modelMatrix:new n.Matrix4,boundingVolume:new e.BoundingSphere};function w(e, t){let r=t*C;const i=n.Cartesian3.unpack(e,r,m);r+=n.Cartesian3.packedLength;const a=n.Matrix4.unpack(e,r,B.modelMatrix);n.Matrix4.multiplyByScale(a,i,a);const o=B.boundingVolume;return n.Cartesian3.clone(n.Cartesian3.ZERO,o.center),o.radius=Math.sqrt(3),B}function A(e, t){let r=t*I;const i=e[r++],a=e[r++],o=n.Cartesian3.fromElements(i,i,a,m),s=n.Matrix4.unpack(e,r,B.modelMatrix);n.Matrix4.multiplyByScale(s,o,s);const c=B.boundingVolume;return n.Cartesian3.clone(n.Cartesian3.ZERO,c.center),c.radius=Math.sqrt(2),B}function O(e, t){let r=t*k;const i=n.Cartesian3.unpack(e,r,m);r+=n.Cartesian3.packedLength;const a=n.Matrix4.unpack(e,r,B.modelMatrix);n.Matrix4.multiplyByScale(a,i,a);const o=B.boundingVolume;return n.Cartesian3.clone(n.Cartesian3.ZERO,o.center),o.radius=1,B}function L(e, t){let r=t*M;const i=e[r++],a=n.Cartesian3.unpack(e,r,m),o=n.Matrix4.fromTranslation(a,B.modelMatrix);n.Matrix4.multiplyByUniformScale(o,i,o);const s=B.boundingVolume;return n.Cartesian3.clone(n.Cartesian3.ZERO,s.center),s.radius=1,B}const v=new n.Cartesian3;function E(t, i, o, s, c){if(!a.defined(i))return;const d=o.length,l=s.attributes.position.values,f=s.indices,u=t.positions,h=t.vertexBatchIds,b=t.indices,p=t.batchIds,y=t.batchTableColors,x=t.batchedIndices,m=t.indexOffsets,C=t.indexCounts,I=t.boundingVolumes,k=t.modelMatrix,M=t.center;let B=t.positionOffset,w=t.batchIdIndex,A=t.indexOffset;const O=t.batchedIndicesOffset;for(let t=0; t<d; ++t){const a=c(i,t),s=a.modelMatrix;n.Matrix4.multiply(k,s,s);const d=o[t],L=l.length;for(let e=0; e<L; e+=3){const t=n.Cartesian3.unpack(l,e,v);n.Matrix4.multiplyByPoint(s,t,t),n.Cartesian3.subtract(t,M,t),n.Cartesian3.pack(t,u,3*B+e),h[w++]=d}const E=f.length;for(let e=0; e<E; ++e)b[A+e]=f[e]+B;const U=t+O;x[U]=new g({offset:A,count:E,color:r.Color.fromRgba(y[d]),batchIds:[d]}),p[U]=d,m[U]=A,C[U]=E,I[U]=e.BoundingSphere.transform(a.boundingVolume,s),B+=L/3,A+=E}t.positionOffset=B,t.batchIdIndex=w,t.indexOffset=A,t.batchedIndicesOffset+=d}const U=new n.Cartesian3,G=new n.Matrix4;function S(t, n, i){const a=i.length,o=2+a*e.BoundingSphere.packedLength+1+function(e){const t=e.length;let n=0;for(let i=0; i<t; ++i)n+=r.Color.packedLength+3+e[i].batchIds.length;return n}(n),s=new Float64Array(o);let c=0;s[c++]=t,s[c++]=a;for(let t=0; t<a; ++t)e.BoundingSphere.pack(i[t],s,c),c+=e.BoundingSphere.packedLength;const d=n.length;s[c++]=d;for(let e=0; e<d; ++e){const t=n[e];r.Color.pack(t.color,s,c),c+=r.Color.packedLength,s[c++]=t.offset,s[c++]=t.count;const i=t.batchIds,a=i.length;s[c++]=a;for(let e=0; e<a; ++e)s[c++]=i[e]}return s}return c((function(e, r){const c=a.defined(e.boxes)?new Float32Array(e.boxes):void 0,d=a.defined(e.boxBatchIds)?new Uint16Array(e.boxBatchIds):void 0,l=a.defined(e.cylinders)?new Float32Array(e.cylinders):void 0,f=a.defined(e.cylinderBatchIds)?new Uint16Array(e.cylinderBatchIds):void 0,u=a.defined(e.ellipsoids)?new Float32Array(e.ellipsoids):void 0,h=a.defined(e.ellipsoidBatchIds)?new Uint16Array(e.ellipsoidBatchIds):void 0,b=a.defined(e.spheres)?new Float32Array(e.spheres):void 0,p=a.defined(e.sphereBatchIds)?new Uint16Array(e.sphereBatchIds):void 0,y=a.defined(c)?d.length:0,x=a.defined(l)?f.length:0,g=a.defined(u)?h.length:0,m=a.defined(b)?p.length:0,C=t.BoxGeometry.getUnitBox(),I=i.CylinderGeometry.getUnitCylinder(),k=o.EllipsoidGeometry.getUnitEllipsoid(),M=C.attributes.position.values,B=I.attributes.position.values,v=k.attributes.position.values;let T=M.length*y;T+=B.length*x,T+=v.length*(g+m);const V=C.indices,F=I.indices,R=k.indices;let Z=V.length*y;Z+=F.length*x,Z+=R.length*(g+m);const D=new Float32Array(T),P=new Uint16Array(T/3),q=s.IndexDatatype.createTypedArray(T/3,Z),W=y+x+g+m,_=new Uint16Array(W),N=new Array(W),Y=new Uint32Array(W),j=new Uint32Array(W),z=new Array(W);!function(e){const t=new Float64Array(e);let r=0;n.Cartesian3.unpack(t,r,U),r+=n.Cartesian3.packedLength,n.Matrix4.unpack(t,r,G)}(e.packedBuffer);const H={batchTableColors:new Uint32Array(e.batchTableColors),positions:D,vertexBatchIds:P,indices:q,batchIds:_,batchedIndices:N,indexOffsets:Y,indexCounts:j,boundingVolumes:z,positionOffset:0,batchIdIndex:0,indexOffset:0,batchedIndicesOffset:0,modelMatrix:G,center:U};E(H,c,d,C,w),E(H,l,f,I,A),E(H,u,h,k,O),E(H,b,p,k,L);const J=S(q.BYTES_PER_ELEMENT,N,z);return r.push(D.buffer,P.buffer,q.buffer),r.push(_.buffer,Y.buffer,j.buffer),r.push(J.buffer),{positions:D.buffer,vertexBatchIds:P.buffer,indices:q.buffer,indexOffsets:Y.buffer,indexCounts:j.buffer,batchIds:_.buffer,packedBuffer:J.buffer}}))}));